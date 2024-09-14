import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarRunOutline = ({
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
      d="M10.517 20.263a1.7 1.7 0 0 1-1.685-1.973l.544-3.125a.18.18 0 0 0-.05-.165l-2.3-2.209a1.689 1.689 0 0 1 .95-2.891l3.163-.455a.2.2 0 0 0 .157-.111l1.42-2.834a1.712 1.712 0 0 1 3.045-.009l.005.009 1.42 2.836a.2.2 0 0 0 .15.107l3.178.458a1.69 1.69 0 0 1 1.445 1.9c-.05.378-.227.728-.5.994L19.16 15a.19.19 0 0 0-.056.164l.544 3.115a1.7 1.7 0 0 1-2.48 1.784L14.34 18.6a.21.21 0 0 0-.2 0l-2.837 1.471a1.7 1.7 0 0 1-.786.192M14.242 7.07a.21.21 0 0 0-.19.115l-1.416 2.826a1.71 1.71 0 0 1-1.285.922l-3.172.456a.2.2 0 0 0-.12.057.214.214 0 0 0 .005.268l2.3 2.205a1.67 1.67 0 0 1 .494 1.507l-.543 3.111a.2.2 0 0 0 .141.216.2.2 0 0 0 .156-.014l2.838-1.474a1.72 1.72 0 0 1 1.58 0l2.836 1.47a.2.2 0 0 0 .134.024.23.23 0 0 0 .167-.232l-.542-3.105a1.68 1.68 0 0 1 .5-1.507l2.292-2.2a.2.2 0 0 0 .055-.112.21.21 0 0 0-.162-.211l-3.184-.459a1.7 1.7 0 0 1-1.283-.92l-1.415-2.83a.213.213 0 0 0-.186-.113M4.575 13.636h-1.3a.75.75 0 1 1 0-1.5h1.3a.75.75 0 0 1 0 1.5M8.39 7.508H3.277a.75.75 0 0 1 0-1.5H8.39a.75.75 0 1 1 0 1.5M5.983 19.825H3.277a.75.75 0 1 1 0-1.5h2.706a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystStarRunOutline;
