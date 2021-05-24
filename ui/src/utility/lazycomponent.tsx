// import React from 'react';

// export interface ILazyComponentProps {
//   promises: () => Array<Promise<any>>;
//   component: (results: any[], error?: any) => React.ReactElement;
//   loadingComponent?: () => React.ReactElement;
// }

// interface ILazyComponentState {
//   loaded: boolean;
//   error?: any;
// }

// // eslint-disable-next-line max-len
// export class LazyComponent extends React.Component<ILazyComponentProps, ILazyComponentState> {
//   private results: any[];

//   constructor(props: ILazyComponentProps) {
//     super(props);
//     this.state = {
//       loaded: false,
//     };
//   }

//   public componentDidMount(): void {
//     Promise.all(this.props.promises()).then(
//       (values) => {
//         this.results = values;
//         this.setState({ loaded: true });
//       },
//       (error) => {
//         this.setState({ loaded: true, error });
//       },
//     );
//   }

//   public render(): HTMLElement {
//     if (!this.state.loaded) {
//       if (this.props.loadingComponent) {
//         return this.props.loadingComponent();
//       }
//       return (
//         <div>
//           <Spinner size={SpinnerSize.large} />
//         </div>
//       );
//     }
//     return this.props.component(this.results, this.state.error);
//   }
// }
