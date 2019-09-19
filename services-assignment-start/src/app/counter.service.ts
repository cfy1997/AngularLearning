export class CounterService {
  activeCount = 0;
  inactiveCount = 0;

  incrementActiveCount() {
    this.activeCount++;
    console.log('Active ' + this.activeCount);
  }

  incrementInactiveCount() {
    this.inactiveCount++;
    console.log('Inactive' + this.inactiveCount);
  }
}
