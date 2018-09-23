import { Model } from '../model';

export interface ModelForm {
  group: Model.Group1;
  array: Model.Group2[];
}

export namespace ModelForm {
  export function from(model: Model): ModelForm {
    return {
      group: model.group,
      array: model.array,
    };
  }
}
