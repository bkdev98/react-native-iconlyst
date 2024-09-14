import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpworkSquareOutline = ({
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
      d="M3.74 3.897C4.725 2.841 6.127 2.25 7.782 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.837 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.499 8.295a.75.75 0 0 1 .838.458l.16.406c.197.5.424 1.08.696 1.66.454-.997 1.418-1.858 2.866-1.858 1.71 0 3.129 1.419 3.129 3.129s-1.42 3.129-3.13 3.129c-.832 0-1.532-.319-2.116-.787l-.409 2.172-.135.722-.738-.138-.737-.14.136-.722.625-3.324a10 10 0 0 1-.295-.477 2.81 2.81 0 0 1-2.787 2.694 2.81 2.81 0 0 1-2.79-2.79V9.032a.75.75 0 0 1 1.5 0v3.399c0 .696.593 1.289 1.29 1.289a1.31 1.31 0 0 0 1.289-1.29V9.032a.75.75 0 0 1 .608-.736m1.161 8.893-.737-.14a.75.75 0 1 0 1.475.278zm1.617-4.542c.555.694 1.146 1.073 1.782 1.073.881 0 1.629-.747 1.629-1.63 0-.88-.748-1.628-1.63-1.628-.93 0-1.503.67-1.64 1.423z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpworkSquareOutline;
