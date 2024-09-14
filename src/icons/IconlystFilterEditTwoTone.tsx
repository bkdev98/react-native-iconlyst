import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterEditTwoTone = ({
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
      d="M17.917 4.363a2.606 2.606 0 0 1 2.605 2.606v1.324c0 1.036-.44 2.024-1.209 2.717l-4.78 4.728a1.5 1.5 0 0 0-.493 1.11v1.93c0 .611-.373 1.161-.942 1.387l-1.826.727a1.494 1.494 0 0 1-2.046-1.387v-3.13c0-.396-.158-.775-.438-1.056L4.55 11.547a3.66 3.66 0 0 1-1.072-2.588v-1.99a2.606 2.606 0 0 1 2.605-2.605"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.766 9.481.738-.123a1.77 1.77 0 0 0 1.025-.566l3.176-3.465c.38-.41.355-1.051-.055-1.43l-.678-.628a1.01 1.01 0 0 0-1.43.055L9.333 6.83c-.247.275-.4.62-.44.987l-.082.761a.825.825 0 0 0 .956.903"
    />
  </Svg>
);
export default IconlystFilterEditTwoTone;
