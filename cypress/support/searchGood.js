export function searchGood(nameOfGood) {
    cy.get('mat-grid-list.mat-grid-list').then(matGridList => {
        if(matGridList.find(`div.item-name:contains("${nameOfGood.goodName}")`).length > 0) {
            cy.get(`div.item-name:contains("${nameOfGood.goodName}")`).then(buttonAddBusket => {
                cy.wrap(buttonAddBusket).parents('mat-card.mat-card')
                .find('[aria-label="Add to Basket"]').click({force:true})
                cy.log('**BINGO**')
            })
        } else {
            cy.log('**NOT BINGO**')
            cy.get('path[d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]').click({force:true})
            searchGood(nameOfGood)
        }
      })
}