import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 5.289v.789c0 .569.342 1.084.868 1.304l.032.012c.525.22.868.735.868 1.305v1.78c0 .228-.056.453-.16.655L3.66 13.9a1.414 1.414 0 0 0 1.253 2.069h7.063a1.414 1.414 0 0 0 1.252-2.068l-1.447-2.767a1.4 1.4 0 0 1-.162-.655v-1.78c0-.57.343-1.085.87-1.305l.031-.012c.526-.22.868-.735.868-1.305v-.788c0-.78-.632-1.414-1.412-1.414H4.914c-.782 0-1.414.633-1.414 1.414"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.445 15.969v4.153"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.932 11.997h4.567m-4.222-6.919H21.5m-7.317 13.838h7.317"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPinTwoTone;
