import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoat1Bold = ({
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
      d="M21.436 15.844a.5.5 0 0 0-.437-.256h-1.606a.316.316 0 0 1-.312-.329c.245-9.065-7.52-12.399-7.6-12.432a.502.502 0 0 0-.687.535c.58 3.971.34 8.09-.57 10.815a.31.31 0 0 0 .298.414h5.273a.499.499 0 1 1 0 1H4.016q-.007-.002-.014-.003H3a.5.5 0 0 0-.459.696l1.622 3.79a2.25 2.25 0 0 0 2.078 1.374h10.772a2.29 2.29 0 0 0 1.923-1.067l2.49-4.03a.5.5 0 0 0 .011-.507"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoat1Bold;
