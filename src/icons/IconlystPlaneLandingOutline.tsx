import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneLandingOutline = ({
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
      d="M18.337 17.26a4.3 4.3 0 0 1-1.607-.321 612 612 0 0 1-10.282-4.267c-2.776-1.185-3.75-3.594-2.605-6.443l.542-1.308a.75.75 0 1 1 1.388.568l-.311.75c.544.223 1.186.482 1.83.742.646.26 1.313.53 1.87.757l2.088-5.026a.75.75 0 0 1 1.015-.39c.184.089.369.17.55.252q.656.276 1.272.635a2.77 2.77 0 0 1 1.235 2.338c.107 1.61.209 3.22.275 4.83 1.185.5 2.208.908 3.209 1.378a4.15 4.15 0 0 1 2.209 2.22 2.42 2.42 0 0 1-.224 1.965 2.68 2.68 0 0 1-2.454 1.32M4.96 7.66c-.374 1.665.322 2.887 2.078 3.637a617 617 0 0 0 10.259 4.257c.653.266 1.773.393 2.187-.343a.92.92 0 0 0 .1-.772 2.65 2.65 0 0 0-1.418-1.321c-.959-.45-1.954-.843-3.065-1.273a1.445 1.445 0 0 1-1.005-1.4c-.066-1.6-.167-3.2-.272-4.795-.052-.773-.307-1.026-.524-1.16a9 9 0 0 0-.964-.483l-2.077 5a.75.75 0 0 1-.98.406c-.643-.266-1.6-.652-2.55-1.036-.62-.255-1.238-.505-1.77-.721zM19.611 21.75H5.485a.75.75 0 1 1 0-1.5h14.126a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystPlaneLandingOutline;
