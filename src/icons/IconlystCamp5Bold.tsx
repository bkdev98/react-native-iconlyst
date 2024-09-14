import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp5Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M10.738 6.107c-.124.123-.234.26-.32.418L8.21 10.623a.21.21 0 0 0 .062.263c.452.336.86.766 1.274 1.152.075.07.19.07.267.001l1.681-1.51a.75.75 0 0 1 1.002 0l1.683 1.512a.197.197 0 0 0 .266-.002c.412-.384.822-.825 1.277-1.152a.21.21 0 0 0 .066-.267L13.58 6.524a1.8 1.8 0 0 0-.317-.416l.955-.957a.749.749 0 1 0-1.061-1.059l-.409.407V3.87a.75.75 0 0 0-1.5 0v.626l-.405-.405a.749.749 0 1 0-1.06 1.059zM9.864 22.326a.2.2 0 0 0 .176.295h3.922a.2.2 0 0 0 .176-.295l-1.961-3.638a.2.2 0 0 0-.352 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.824 19.965-4.105-7.618a.2.2 0 0 0-.31-.054l-1.594 1.434a.746.746 0 0 1-1.003.001l-1.683-1.513a.2.2 0 0 0-.268 0l-1.683 1.513a.75.75 0 0 1-1.004-.002L7.59 12.294a.2.2 0 0 0-.31.053l-4.104 7.617v.002h-.001a1.79 1.79 0 0 0 .041 1.78c.328.548.904.875 1.541.875h3.124a.2.2 0 0 0 .176-.105l3.284-6.092a.748.748 0 0 1 1.32 0l3.282 6.092a.2.2 0 0 0 .176.105h3.124c.637 0 1.213-.327 1.54-.875.33-.55.345-1.215.041-1.781"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp5Bold;
