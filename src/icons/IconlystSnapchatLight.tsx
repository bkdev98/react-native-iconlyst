import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnapchatLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.52 3.253a4.883 4.883 0 0 1 5.362 4.86c0 4.272.212 6.409 4.118 8.118h-.002c-1.761.777-1.97.87-2.68 2.331-.184.382-.554.66-.977.695-2.5.201-3.494 1.511-5.341 1.511s-2.84-1.31-5.34-1.511c-.423-.034-.793-.313-.978-.695-.71-1.462-.918-1.554-2.68-2.33L3 16.23c3.84-1.68 4.11-3.773 4.119-7.903.004-2.55 1.862-4.832 4.401-5.075"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.053 9.133c1.039.588 1.977 1.523 2.865 2.623M19.951 9.133c-1.039.588-1.977 1.523-2.865 2.623"
    />
  </Svg>
);
export default IconlystSnapchatLight;
