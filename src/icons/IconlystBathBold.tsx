import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBathBold = ({
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
      d="M19.699 11.85h-.004V5.3c0-.805-.35-1.568-.961-2.096a2.79 2.79 0 0 0-2.227-.646l-1.871.29a2.756 2.756 0 0 0-2.357 2.741v.622a2.54 2.54 0 0 0-1.064.588 2.25 2.25 0 0 0-.709 1.63v.05c0 .47.396.85.882.85h3.285c.486 0 .882-.38.882-.85 0-1.07-.744-1.97-1.776-2.276V5.59c0-.634.455-1.163 1.085-1.259l1.867-.289c.364-.05.74.054 1.023.298.28.242.441.592.441.96v6.55H4.301c-.994 0-1.801.808-1.801 1.8v.78c0 2.314 1.604 4.246 3.754 4.78l-.787 1.064a.75.75 0 1 0 1.206.892l1.329-1.795h8.134l1.329 1.795a.75.75 0 0 0 1.049.157.75.75 0 0 0 .157-1.049l-.813-1.098c2.092-.574 3.642-2.473 3.642-4.746v-.78c0-.992-.808-1.8-1.801-1.8"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBathBold;
