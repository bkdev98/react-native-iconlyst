import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscoverSearchOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.659 8.341a.75.75 0 0 1 .185.754l-1.491 4.766a.75.75 0 0 1-.492.492l-4.766 1.491a.75.75 0 0 1-.94-.94l1.492-4.765a.75.75 0 0 1 .492-.492l4.766-1.491a.75.75 0 0 1 .754.185m-4.698 2.62-.946 3.024 3.024-.946.946-3.024z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5.75.75 0 0 1 0 1.5c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25a9.75 9.75 0 0 1 8.688 5.32.75.75 0 0 1-1.336.683A8.25 8.25 0 0 0 12 3.75M18.17 14.916a.75.75 0 0 1 .704.49l.101.274a3.03 3.03 0 0 0 1.79 1.792l.274.102a.75.75 0 0 1 0 1.406l-.274.102a3.03 3.03 0 0 0-1.79 1.792l-.101.275a.75.75 0 0 1-1.407 0l-.102-.275a3.03 3.03 0 0 0-1.789-1.792l-.274-.102a.75.75 0 0 1 0-1.406l.274-.102a3.03 3.03 0 0 0 1.79-1.792l.1-.274a.75.75 0 0 1 .704-.49m-.959 3.361c.366.27.69.594.96.96.27-.366.593-.69.959-.96a4.5 4.5 0 0 1-.96-.96 4.5 4.5 0 0 1-.959.96M21.058 10.325a.75.75 0 0 1 .717.531c.119.39.424.696.813.814a.75.75 0 0 1 0 1.435 1.22 1.22 0 0 0-.813.814.75.75 0 0 1-1.435 0 1.22 1.22 0 0 0-.812-.814.75.75 0 0 1 0-1.435c.389-.118.693-.423.812-.814a.75.75 0 0 1 .718-.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscoverSearchOutline;
