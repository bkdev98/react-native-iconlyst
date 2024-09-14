import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopMoodyBold = ({
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
      d="M16.066 13.047c-.318.207-.733.321-1.168.321s-.848-.114-1.167-.32a.75.75 0 0 1 .814-1.26c.092.061.613.06.703.001a.753.753 0 0 1 1.038.22.75.75 0 0 1-.22 1.038m-3.035 4.48c-1.004 0-1.952-.481-2.603-1.319a.75.75 0 0 1 1.186-.92c.364.47.881.739 1.417.739a.75.75 0 0 1 0 1.5m-3.34-5.518a.75.75 0 0 1 1.038-.22c.084.055.61.059.7 0a.751.751 0 0 1 .819 1.258 2.17 2.17 0 0 1-1.169.321c-.435 0-.85-.114-1.168-.321a.75.75 0 0 1-.22-1.038m10.138.528.001-.069c0-1.846-1.245-3.427-2.922-3.823l.005-.039c.217-1.875-.873-3.496-3.08-4.571l-.218-.103c-.402-.192-.856-.408-1.315-.488a.52.52 0 0 0-.455.173.52.52 0 0 0-.1.486c.133.447.297 1.587-1.089 2.524a3.68 3.68 0 0 0-1.359 1.964c-1.805.299-3.169 1.931-3.169 3.877v.074c-1.554.506-2.64 2.008-2.64 3.735 0 1.952 1.405 3.454 3.695 3.925 1.671.253 3.967.357 6.124.357 2.563 0 4.93-.147 5.82-.366 1.55-.382 3.361-1.637 3.361-3.916 0-1.741-1.094-3.246-2.659-3.74"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPoopMoodyBold;
