// import { mount } from '@vue/test-utils';
// import SlotGame from '@/components/SlotGame.vue';
//
// describe('Slot Game', () => {
//     it('should start with 10 credits', () => {
//         const wrapper = mount(SlotGame);
//         expect(wrapper.vm.credits).toBe(10);
//     });
//
//     it('should deduct 1 credit when starting a game', () => {
//         const wrapper = mount(SlotGame);
//         wrapper.vm.startGame();
//         expect(wrapper.vm.credits).toBe(9);
//     });
//
//     it('should not start a game if there are no credits', () => {
//         const wrapper = mount(SlotGame);
//         wrapper.vm.credits = 0;
//         wrapper.vm.startGame();
//         expect(wrapper.vm.spinning).toBe(false);
//     });
//
//     it('should have 3 blocks after starting a game', () => {
//         const wrapper = mount(SlotGame);
//         wrapper.vm.startGame();
//         expect(wrapper.vm.blocks).toHaveLength(3);
//     });
//
//     it('should update credits when winning a game', () => {
//         const wrapper = mount(SlotGame);
//         wrapper.vm.blocks = ['C', 'C', 'C'];
//         wrapper.vm.updateCredits(true);
//         expect(wrapper.vm.credits).toBe(20);
//     });
//
//     it('should not update credits when losing a game', () => {
//         const wrapper = mount(SlotGame);
//         wrapper.vm.blocks = ['C', 'L', 'O'];
//         wrapper.vm.updateCredits(false);
//         expect(wrapper.vm.credits).toBe(10);
//     });
//
//     it('should cash out with a 60% chance when having above 60 credits', () => {
//         const wrapper = mount(SlotGame);
//         wrapper.vm.credits = 70;
//         wrapper.vm.cashOut();
//         expect(wrapper.vm.credits).toBe(0);
//     });
//
//     it('should move "CASH OUT" with a 50% chance when having between 40 and 60 credits', () => {
//         const wrapper = mount(SlotGame);
//         wrapper.vm.credits = 50;
//         wrapper.vm.cashOut();
//         expect(wrapper.vm.cashOutMoved).toBe(true);
//     });
//
//     it('should disable "CASH OUT" with a 40% chance when having between 40 and 60 credits', () => {
//         const wrapper = mount(SlotGame);
//         wrapper.vm.credits = 50;
//         wrapper.vm.cashOut();
//         expect(wrapper.vm.cashOutDisabled).toBe(true);
//     });
//
//     it('should have truly random blocks when having less than 40 credits', () => {
//         const wrapper = mount(SlotGame);
//         wrapper.vm.credits = 30;
//         wrapper.vm.startGame();
//         expect(wrapper.vm.blocks).not.toEqual(['', '', '']);
//     });
//
//     it('should have a 30% chance of re-rolling blocks when having between 40 and 60 credits and winning', () => {
//         const wrapper = mount(SlotGame);
//         wrapper.vm.credits = 50;
//         wrapper.vm.blocks = ['C', 'C', 'C'];
//         wrapper.vm.startGame();
//         expect(wrapper.vm.blocks).not.toEqual(['C', 'C', 'C']);
//     });
//
//     it('should have a 60% chance of re-rolling blocks when having above 60 credits and winning', () => {
//         const wrapper = mount(SlotGame);
//         wrapper.vm.credits = 70;
//         wrapper.vm.blocks = ['C', 'C', 'C'];
//         wrapper.vm.startGame();
//         expect(wrapper.vm.blocks).not.toEqual(['C', 'C', 'C']);
//     });
// });