import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryClockTimeOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m14.704 2.267-6.898.017c-1.636.003-3.021.59-3.993 1.638-.965 1.04-1.467 2.476-1.463 4.084l.018 7.843c.004 1.608.51 3.041 1.48 4.078.975 1.043 2.363 1.624 4.004 1.62h.002l3.418-.02a.75.75 0 1 0-.008-1.5l-3.416.02h-.001c-1.27.002-2.243-.438-2.904-1.145-.667-.712-1.072-1.758-1.075-3.057L3.85 8.003c-.003-1.298.398-2.345 1.063-3.061.66-.71 1.632-1.155 2.897-1.158l.62-.002.009 5.838a.75.75 0 0 0 .985.711l2.58-.852 2.564.836a.75.75 0 0 0 .983-.715l-.015-5.834.597-.002c1.27-.003 2.244.438 2.905 1.144.667.713 1.072 1.758 1.075 3.057v.004l.018 2.315a.75.75 0 0 0 1.5-.012l-.018-2.31v-.003c-.005-1.607-.51-3.04-1.48-4.075-.975-1.043-2.363-1.624-4.004-1.62l-1.267.003a.8.8 0 0 0-.158 0M9.93 3.78l.006 4.803 1.83-.605a.75.75 0 0 1 .468 0l1.813.591-.012-4.799zM17.3 14.136a3.05 3.05 0 1 0 0 6.101 3.05 3.05 0 0 0 0-6.101m-4.55 3.05a4.55 4.55 0 1 1 9.101 0 4.55 4.55 0 0 1-9.101 0m6.132-1.485a.75.75 0 0 1-.033 1.06l-1.035.973a.75.75 0 1 1-1.027-1.094l1.035-.972a.75.75 0 0 1 1.06.033"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryClockTimeOutline;
