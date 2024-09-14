import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPinTwoTone = ({
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
      d="M19.687 10.299v-1.3c0-.53-.205-1.038-.571-1.42L15.324 3.63A2.05 2.05 0 0 0 13.846 3H8.195a3.747 3.747 0 0 0-3.76 3.657v10.506a3.753 3.753 0 0 0 3.67 3.835h4.002"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.328 3.063v2.892a2.56 2.56 0 0 0 2.554 2.56h2.739"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.9 13.667c.16.401.061.858-.25 1.158 0 0-.486.366-.563.547-.099.23-.112.776 0 1 .113.227.81.608.81.608.422.316.67.814.67 1.342a.677.677 0 0 1-.676.677h-4.61a.68.68 0 0 1-.678-.677c0-.528.25-1.026.672-1.342 0 0 .696-.381.81-.608.112-.224.098-.77 0-1-.077-.181-.565-.547-.565-.547a1.065 1.065 0 0 1 .74-1.83h2.65c.436.001.828.267.99.672"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.586 19v2.001"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.502 14.109H8.735m1.487-4.129H8.734"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDocumentPinTwoTone;
