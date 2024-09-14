import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdSearchBroken = ({
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
      d="M11.372 19.335H7.215c-2.444 0-3.965-1.725-3.965-4.167V8.58c0-2.44 1.528-4.166 3.965-4.166H8.9M21.25 11.504V8.58c0-2.44-1.52-4.166-3.965-4.166H12.25M3.25 9.712h18M15.084 13.867a2.922 2.922 0 1 1-.805 2.611M20.8 19.585l-1.583-1.583"
    />
  </Svg>
);
export default IconlystBankCarrdSearchBroken;
