describe("ui-counter", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5500/")
    })

    it("+ 버튼 클릭시 1 증가한다.", () => {
        cy.get(".plus-button").click();

        cy.get(".count-display").should("have.text", "10");
    });
});