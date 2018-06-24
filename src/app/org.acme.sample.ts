import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.sample{
   export class Transfer extends Asset {
      assetId: string;
      owner: CardMember;
      value: number;
      merchant: Merchant;
      cardmember: CardMember;
   }
   export abstract class SampleParticipant extends Participant {
      participantId: string;
      firstName: string;
      lastName: string;
      valueBal: number;
   }
   export class Merchant extends SampleParticipant {
   }
   export class CardMember extends SampleParticipant {
   }
   export class SampleTransaction extends Transaction {
      asset: Transfer;
      merchant: Merchant;
      cardmember: CardMember;
      newValue: number;
   }
   export class SampleDisputes extends Transaction {
      asset: Transfer;
      newValue: number;
   }
   export class MerchantCredit extends Transaction {
      asset: Transfer;
      newValue: number;
   }
   export class SampleEvent extends Event {
      asset: Transfer;
      oldValue: number;
      newValue: number;
   }
// }
