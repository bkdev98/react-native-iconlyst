import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountTicketOutline = ({
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
      d="M9.854 15.204a.75.75 0 0 1-.53-1.28l4.9-4.9a.75.75 0 1 1 1.06 1.06l-4.9 4.9a.75.75 0 0 1-.53.22M14.63 15.333a.947.947 0 1 1 0-1.893.947.947 0 0 1 0 1.893M9.865 10.568a.946.946 0 1 1 0-1.893.946.946 0 0 1 0 1.893"
    />
    <Path
      fill={props.color}
      d="M15.137 21.75a3.3 3.3 0 0 1-.568-.029 1.2 1.2 0 0 1-.856-.519 5 5 0 0 1-.4-.712 1.166 1.166 0 0 0-2.08-.083q-.195.413-.449.792a1.22 1.22 0 0 1-.86.523 3.5 3.5 0 0 1-.565.027c-.763.053-1.53 0-2.278-.158a3.97 3.97 0 0 1-2.72-2.719 8.5 8.5 0 0 1-.158-2.278V7.4c-.05-.76.002-1.522.156-2.268a3.97 3.97 0 0 1 2.726-2.726 8.4 8.4 0 0 1 2.268-.157q.283-.01.563.027a1.19 1.19 0 0 1 .851.5q.277.4.488.836a1.15 1.15 0 0 0 .965.594 1.15 1.15 0 0 0 1.05-.615q.195-.412.447-.789a1.22 1.22 0 0 1 .861-.523q.266-.036.534-.028a8.4 8.4 0 0 1 2.3.155A3.98 3.98 0 0 1 20.14 5.13c.155.748.208 1.513.157 2.274v9.187a8.4 8.4 0 0 1-.159 2.28 3.97 3.97 0 0 1-2.717 2.718 8.4 8.4 0 0 1-2.283.161m-.26-1.506c.08.007.154.006.26.006.623.04 1.248.006 1.862-.1a2.47 2.47 0 0 0 1.694-1.7c.106-.614.14-1.239.1-1.86V7.401c.04-.62.006-1.243-.1-1.856a2.48 2.48 0 0 0-1.7-1.7 8.3 8.3 0 0 0-1.857-.1h-.25c-.068.11-.152.27-.28.511a2.65 2.65 0 0 1-2.36 1.452 2.69 2.69 0 0 1-2.313-1.375c-.158-.29-.259-.478-.319-.578-.082-.007-.162-.006-.266-.006a8 8 0 0 0-1.853.1 2.48 2.48 0 0 0-1.7 1.7 8 8 0 0 0-.1 1.852v9.193a8 8 0 0 0 .1 1.861 2.48 2.48 0 0 0 1.7 1.7 8.4 8.4 0 0 0 1.86.1h.251c.068-.108.15-.267.277-.5a2.649 2.649 0 0 1 4.712-.034c.151.278.231.435.281.522"
    />
  </Svg>
);
export default IconlystDiscountTicketOutline;
