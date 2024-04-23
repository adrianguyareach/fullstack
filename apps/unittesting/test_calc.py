import unittest
import calc
from unittest_prettify.colorize import (
    colorize,
    GREEN,
)

@colorize(color=GREEN)
class TestCalc(unittest.TestCase):

    "Create organisation flow test"

    def test_add(self):
        "commenting"
        self.assertEqual(calc.add(1, 2), 3)
        self.assertEqual(calc.add(-1, 2),1)
        self.assertEqual(calc.add(3, 2), 5)
        self.assertEqual(calc.add(1, 2), 3)

    def test_subtract(self):
        self.assertEqual(calc.subtract(2, 1), 1)

    def test_multiply(self):
        self.assertEqual(calc.multiply(2, 1), 2)
    
    def test_divide(self):
        self.assertEqual(calc.divide(2, 1), 2)


if __name__ == '__main__':
    unittest.main(verbosity=2)