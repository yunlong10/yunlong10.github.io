# frozen_string_literal: true

# Sorts selected bibliography entries at build time using site.data.pub_citations
# (from jekyll-get-json) and optional site.data.pub_stars for tie-breaking.
# Registered as {% selected_bibliography_sorted ... %} with the same flags as {% bibliography %}.

module Jekyll
  class Scholar
    class SelectedBibliographySortedTag < BibliographyTag
      def render(context)
        set_context_to context
        update_dependency_tree

        prev_skip = @skip_sort
        @skip_sort = true
        items = entries
        @skip_sort = prev_skip

        site = context.registers[:site]
        cite = normalize_hash(site.data["pub_citations"])
        stars = normalize_hash(site.data["pub_stars"])

        items = items.compact.sort do |e1, e2|
          c1 = cite_count(e1, cite)
          c2 = cite_count(e2, cite)
          if (cmp = c2 <=> c1) != 0
            next cmp
          end

          s1 = star_count(e1, stars)
          s2 = star_count(e2, stars)
          if (cmp = s2 <=> s1) != 0
            next cmp
          end

          year_int(e2) <=> year_int(e1)
        end

        if group?
          groups = group(items)
          render_groups(groups)
        else
          items = items[offset..max] if limit_entries?
          render_items(items)
        end
      end

      private

      def normalize_hash(h)
        return {} unless h.is_a?(Hash)

        h.transform_keys(&:to_s)
      end

      def cite_count(entry, cite)
        id = entry["google_scholar_id"]&.to_s
        return 0 if id.nil? || id.empty?

        v = cite[id]
        return 0 if v.nil?

        v.to_i
      end

      def star_count(entry, stars)
        repo = entry["stars"]&.to_s
        return 0 if repo.nil? || repo.empty?

        v = stars[repo]
        return 0 if v.nil?

        v.to_i
      end

      def year_int(entry)
        y = entry["year"]
        return 0 if y.nil?

        y.respond_to?(:numeric?) && y.numeric? ? y.to_i : y.to_s.to_i
      rescue StandardError
        0
      end
    end
  end
end

Liquid::Template.register_tag("selected_bibliography_sorted", Jekyll::Scholar::SelectedBibliographySortedTag)
