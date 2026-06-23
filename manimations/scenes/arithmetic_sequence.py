from manim import *

class ArithmeticSequence(Scene):
    def construct(self):
        # 1. Create the main formula
        # Split the formula into parts (indices) and the box them individually
        formula = MathTex(
            "T_n","=", "a", "+", "(n-1)", "d")
        formula.scale(1.5)

        # 2. Define the labels/explanations

        title = Text("Arithmetic Sequence Formula", font_size=40).to_edge(UP)

        # 3. Initial animation

        self.play(Write(title))
        self.play(Write(formula))
        self.wait(1)
        
        # 4. Highlight 'a' (First Term)

        box_a = SurroundingRectangle(formula[2], buff = 0.1, color = YELLOW)
        label_a = Text('First Term', font_size=24, color=YELLOW).next_to(box_a, DOWN)

        self.play(Create(box_a), Write(label_a))
        self.wait(1)

        # 5. Highlight 'd' (Common Difference)
        # Formula for d: T_n - T_(n-1)

        box_d = SurroundingRectangle(formula[5], buff=0.1, color=BLUE)
        label_d = MathTex("d = T_n - T_{n-1}", font_size = 34, color = BLUE).next_to(box_d, DOWN)

        # Transformation: Move the box from 'a' to 'd' and swap labels
        self.play(
            ReplacementTransform(box_a, box_d),
            ReplacementTransform(label_a, label_d)
        )
        self.wait(1)

        # 6. Highlight 'n' (Position/Number of terms)
        box_n = SurroundingRectangle(formula[4], buff = 0.1, color=GREEN)
        label_n = Text("Term Position", font_size=24, color = GREEN).next_to(box_n, DOWN)

        self.play(
            ReplacementTransform(box_d, box_n), 
            ReplacementTransform(label_d, label_n)
        )

        self.wait(2)