import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPomegranateHalfLight = ({
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
      d="M11.989 3c.595.057.94 1.246.94 1.246.335-.313 1.49-1.068 1.975-.656.222.207-.924 2.116-.922 2.588.942.119 1.89.272 2.779.615.849.314 1.463 1.208 1.918 1.939 1.018 1.655 1.618 3.66 1.475 5.613-.115 1.468-.913 2.822-1.865 3.909-.5.569-1.062 1.085-1.675 1.531-.856.616-1.907 1.226-2.998 1.215-1.095-.005-2.19-.006-3.284-.036-1.395-.08-2.52-.639-3.57-1.58-1.056-.947-1.923-2.113-2.479-3.42-.634-1.501-.582-3.014-.015-4.534a11.5 11.5 0 0 1 2.45-3.888c.64-.657 1.307-.861 2.178-1.106q.619-.176 1.253-.289c.03-.462-1.098-2.226-.673-2.433.506-.26 1.219.25 1.58.55 0 0 .374-1.264.933-1.264M11.99 9.476H12M11.99 17.566H12M11.995 13.516v.01M16.04 13.516v.01M7.95 13.516v.01M14.859 16.378l-.007.007M9.138 10.657l-.007.007M9.131 16.378l.007.007M14.852 10.657l.007.007"
    />
  </Svg>
);
export default IconlystPomegranateHalfLight;
