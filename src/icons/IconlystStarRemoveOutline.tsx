import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarRemoveOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.82 5.427 9.99 9.076l-.001.002c-.293.579-.85.978-1.492 1.068h-.001l-4.096.59a.461.461 0 0 0-.26.788l2.959 2.84c.47.45.687 1.105.574 1.746l-.425 2.435a.75.75 0 1 1-1.477-.258l.425-2.434a.45.45 0 0 0-.133-.404l-.002-.002-2.96-2.841-.002-.002A1.961 1.961 0 0 1 4.2 9.25l4.088-.59a.48.48 0 0 0 .363-.259l1.835-3.66a1.99 1.99 0 0 1 3.533 0l.005.01 2.157 4.336a.75.75 0 0 1-1.343.668l-2.154-4.329a.5.5 0 0 0-.205-.204h-.001a.49.49 0 0 0-.659.205M18.51 9.748a.75.75 0 0 1 .849-.636l.942.136a1.96 1.96 0 0 1 1.683 2.2 1.96 1.96 0 0 1-.583 1.155l-2.961 2.845a.45.45 0 0 0-.133.402v.002l.702 4.022a1.98 1.98 0 0 1-1.639 2.267h-.002a1.98 1.98 0 0 1-1.235-.203l-3.65-1.893a.5.5 0 0 0-.459 0L8.37 21.94a.75.75 0 0 1-.69-1.332l3.656-1.895a2 2 0 0 1 1.836 0l3.66 1.897a.478.478 0 0 0 .697-.494l-.698-4.004a1.95 1.95 0 0 1 .576-1.75l2.954-2.839a.461.461 0 0 0-.259-.789h-.01l-.946-.137a.75.75 0 0 1-.636-.85"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.048 4.885a.75.75 0 0 1 0 1.06L4.756 21.232a.75.75 0 1 1-1.06-1.061l15.29-15.286a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarRemoveOutline;
