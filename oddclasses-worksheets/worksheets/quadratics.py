import random
from sympy import symbols, expand

x = symbols("x")

def factorise_quadratic():
    """Return (questions, answer) for a monic quadratic with integer roots."""
    choices = [n for n in range(-9, 10) if n != 0]
    r1 = random.choice(choices)
    r2 = random.choice(choices)
    answer = (x - r1) * (x - r2)
    question = expand(answer)
    return question, answer