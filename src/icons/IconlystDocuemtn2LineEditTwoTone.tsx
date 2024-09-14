import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocuemtn2LineEditTwoTone = ({
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
      d="M10.95 20.723H8.4a4.057 4.057 0 0 1-4.056-4.056v-9.61A4.057 4.057 0 0 1 8.399 3h6.988a4.057 4.057 0 0 1 4.056 4.056v3.313"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.263 20.866-.725.122a.81.81 0 0 1-.94-.889l.081-.747c.04-.36.19-.7.432-.97l3.157-3.446a.995.995 0 0 1 1.404-.054l.667.616a.995.995 0 0 1 .055 1.405l-3.123 3.408c-.262.294-.619.49-1.008.555"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.395 9.543H9.392m2.611 4.369H9.391"
    />
  </Svg>
);
export default IconlystDocuemtn2LineEditTwoTone;
