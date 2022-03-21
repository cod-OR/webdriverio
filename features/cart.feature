
Feature: add to cart

	Scenario: 
		Given User is at shop page
		When User clicks on add
		Then Checkout count is increments

	Scenario:
		Given User is in the cart
		And cart is not empty
		When quantity is incresed
		Then Total is incremented by price at both places
		When quantity is decreased
		Then Total is decremented by price at both places

