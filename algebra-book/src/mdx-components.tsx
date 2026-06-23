import type {MDXComponents} from "mdx/types";
import BookLayout from "@/components/BookLayout";
import EquationBalancer from "@/components/EquationBalancer";
import Quiz from "@/components/Quiz"

export function useMDXComponents(components: MDXComponents): MDXComponents{
    return {
        wrapper: BookLayout,
        EquationBalancer,
        Quiz,
        ...components,
    };
}