import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleBed3Bulk = ({
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
      d="M21.702 12.892a2.1 2.1 0 0 0-1.272-1.273c-.342-.117-.699-.117-1.408-.117H5.63c-.71 0-1.066 0-1.415.119a2.09 2.09 0 0 0-1.264 1.27c-.125.343-.125.699-.125 1.411v1.391c0 .717 0 1.077.124 1.419a2.07 2.07 0 0 0 1.841 1.374v1.076a.75.75 0 0 0 1.5 0v-.86c0-.11.09-.2.2-.2h11.671c.11 0 .2.09.2.2v.86a.75.75 0 0 0 1.5 0v-1.076a2.081 2.081 0 0 0 1.84-1.373c.124-.343.124-.703.124-1.42v-1.391c0-.711 0-1.068-.124-1.41"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.869 10.447h1.56a.21.21 0 0 0 .2-.16 2.75 2.75 0 0 1 2.659-2.05c1.274 0 2.347.872 2.658 2.05a.21.21 0 0 0 .2.16h.36a.21.21 0 0 0 .2-.16 2.75 2.75 0 0 1 2.659-2.05c1.274 0 2.347.872 2.658 2.05a.21.21 0 0 0 .2.16h1.56a.5.5 0 0 0 .5-.5V6.716c0-.777 0-1.165-.132-1.532a2.3 2.3 0 0 0-1.368-1.37c-.366-.127-.756-.127-1.531-.127H7.4c-.775 0-1.163 0-1.547.131a2.29 2.29 0 0 0-1.351 1.363c-.134.37-.134.758-.134 1.534v3.232a.5.5 0 0 0 .5.5"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDoubleBed3Bulk;
