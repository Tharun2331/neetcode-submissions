class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for c in s:
            match c:
                case '(' | '{' | '[':
                    stack.append(c)
                case ')':
                    if not stack or stack.pop() != '(':
                        return False
                case '}':
                    if not stack or stack.pop() != '{':
                        return False
                case ']':
                    if not stack or stack.pop() != '[':
                        return False
                case _:
                    continue
        return len(stack) == 0
