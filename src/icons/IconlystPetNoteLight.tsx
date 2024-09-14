import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetNoteLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.851 20.557a2.42 2.42 0 0 1-1.746.744H7.782C4.842 21.3 3 19.22 3 16.274V8.327c0-2.946 1.834-5.026 4.782-5.026h8.434C19.166 3.3 21 5.38 21 8.327v5.893a2.42 2.42 0 0 1-.674 1.676z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.676 21.23v-3.415a3.02 3.02 0 0 1 3.014-3.022h3.233M10.2 6.89v-.052m-.007-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M13.464 8.548v-.052m-.007-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M6.95 8.548v-.052m-.007-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M10.231 13.472c1.368 0 3.102 1.185 3.078-.639-.01-1.368-1.435-2.652-3.078-2.653-1.652 0-3.293 1.395-3.065 2.817.252 1.65 1.853.475 3.065.475Z"
    />
  </Svg>
);
export default IconlystPetNoteLight;
