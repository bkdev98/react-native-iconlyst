import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountTicketBroken = ({
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
      d="M13.579 19.488c-.652.652-.978.978-1.322 1.168-.832.459-1.841.459-2.674 0-.343-.19-.67-.516-1.321-1.168-.142-.142-.213-.213-.246-.262-.121-.179-.123-.186-.103-.401.006-.059.066-.265.186-.677a1.62 1.62 0 0 0-.37-1.56l-.035-.034a1.61 1.61 0 0 0-1.63-.404c-.38.117-.57.176-.63.183-.209.022-.231.016-.406-.101a2.4 2.4 0 0 1-.26-.243c-.655-.653-.982-.98-1.172-1.324a2.77 2.77 0 0 1-.001-2.673c.19-.344.516-.672 1.17-1.326l6.151-6.15c.656-.656.983-.984 1.329-1.173a2.77 2.77 0 0 1 2.667 0c.345.19.673.517 1.328 1.172.141.141.211.211.245.262.117.175.123.198.1.407-.006.06-.066.25-.184.63a1.61 1.61 0 0 0 .4 1.63 1.61 1.61 0 0 0 1.633.404c.381-.118.572-.177.632-.183.21-.023.232-.017.407.1.05.034.12.104.26.244.656.655.983.983 1.173 1.328.457.83.457 1.838 0 2.668-.19.345-.517.673-1.172 1.328l-3.078 3.078M12.315 15.426V8.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.638 11.993.034.034m.111-.165a.196.196 0 1 1-.278.277.196.196 0 0 1 .278-.277M8.898 11.993l.034.034m.11-.165a.196.196 0 1 1-.277.277.196.196 0 0 1 .278-.277"
    />
  </Svg>
);
export default IconlystDiscountTicketBroken;
