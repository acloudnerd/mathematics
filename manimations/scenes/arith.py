from manim import *

class DistributiveProperty(Scene):
    def construct(self):
        # 1. Create the initial equation (a+b)(c+d)
        # We index these carefully:  0123456789
        #                            (a+b)(c+d)
        equation = MathTex("(", "a", "+", "b", ")", "(", "c", "+", "d", ")")
        equation.scale(1.5)
        self.play(Write(equation))
        self.wait(1)

        # Positions for the result terms to land (below the equation)
        result_pos = DOWN * 2
        
        # Define the individual multiplication steps
        # Each tuple: (start_index, end_index, color, label_text)
        steps = [
            (1, 6, YELLOW, "ac"), # a * c
            (1, 8, YELLOW, "ad"), # a * d
            (3, 6, BLUE,   "bc"), # b * c
            (3, 8, BLUE,   "bd"), # b * d
        ]

        full_expansion = VGroup()

        for i, (start_idx, end_idx, col, label) in enumerate(steps):
            # Create curved arrow from below
            # .get_bottom() ensures it stays underneath the terms
            arrow = CurvedArrow(
                equation[start_idx].get_bottom() + DOWN * 0.1, 
                equation[end_idx].get_bottom() + DOWN * 0.1, 
                angle=TAU/4, # Positive angle curves it downwards
                color=col
            )
            
            # Create the resulting term
            term = MathTex(label).scale(1.2).set_color(col)
            if i == 0:
                term.move_to(result_pos)
            else:
                # Add a plus sign before subsequent terms
                plus = MathTex("+").scale(1.2).next_to(full_expansion, RIGHT)
                term.next_to(plus, RIGHT)
                full_expansion.add(plus)
            
            # Animate slowly
            self.play(Create(arrow), run_time=1.5)
            self.play(FadeIn(term, shift=UP * 0.3), run_time=1)
            full_expansion.add(term)
            self.play(FadeOut(arrow))
            self.wait(0.5)

        self.play(full_expansion.animate.center().shift(DOWN * 2))
        self.wait(2)