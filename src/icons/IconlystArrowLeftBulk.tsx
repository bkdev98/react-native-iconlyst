import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="m15.798 10.81 3.699-.327c.83 0 1.503.68 1.503 1.517a1.51 1.51 0 0 1-1.503 1.518l-3.7-.327c-.65 0-1.179-.533-1.179-1.19 0-.66.528-1.191 1.18-1.191"
        opacity={0.4}
      />
      <Path d="M3.375 10.87c.058-.059.274-.305.477-.51 1.184-1.283 4.274-3.382 5.89-4.024.246-.102.867-.32 1.2-.336a2 2 0 0 1 .91.22c.36.203.649.525.808.904.101.262.26 1.05.26 1.064.159.86.245 2.259.245 3.805 0 1.472-.086 2.814-.216 3.688-.014.016-.173.993-.347 1.328A1.82 1.82 0 0 1 11 18h-.058c-.433-.014-1.343-.394-1.343-.408-1.53-.642-4.548-2.639-5.761-3.966 0 0-.343-.342-.491-.554A1.77 1.77 0 0 1 3 12.008c0-.423.13-.817.375-1.138" />
    </G>
  </Svg>
);
export default IconlystArrowLeftBulk;
