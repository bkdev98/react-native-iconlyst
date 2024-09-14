import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketStarLightcurved = ({
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
      d="M21.44 13.994c-2.661 0-2.661-4.114 0-4.114 0-4.768 0-6.47-9.395-6.47S2.65 5.113 2.65 9.88c2.66 0 2.66 4.114 0 4.114 0 4.768 0 6.47 9.395 6.47s9.395-1.702 9.395-6.47"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.045 9.171c-.683 0-.748 1.09-1.154 1.475-.407.385-1.67-.055-1.846.628-.175.684.962.916 1.103 1.503.14.586-.554 1.41.039 1.822.594.409 1.233-.519 1.858-.519s1.264.928 1.858.518-.101-1.235.039-1.821c.14-.587 1.278-.819 1.103-1.503s-1.44-.243-1.846-.628c-.406-.386-.471-1.475-1.154-1.475"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTicketStarLightcurved;
