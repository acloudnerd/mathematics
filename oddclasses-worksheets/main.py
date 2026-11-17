from worksheets.quadratics import factorise_quadratic

def show(expr):
    """Make a SymPy expression readible in the terminal."""
    return str(expr).replace("**", "^").replace("*", "")

for i in range(1, 11):
    question, answer = factorise_quadratic()
    print(f"{i:>2}. Factorise {show(question)}")
    print(f"    Answer: {show(answer)}")