import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFeatherBold = ({
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
      d="M16.36 3.058c-4.316 2.859-6.188 6.745-7.005 9.624a.287.287 0 0 0 .298.366c1.426-.11 2.753-.495 4.393-1.534a.3.3 0 0 0 .125-.333l-.492-1.706a.752.752 0 0 1 .647-.955l3.746-.365a.3.3 0 0 0 .178-.082 54 54 0 0 0 2.345-2.41.29.29 0 0 0 .035-.347c-.868-1.384-2.339-2.225-4.193-2.288-.029 0-.053.014-.077.03"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.946 17.345a.75.75 0 0 1 0-1.5h5.252a.3.3 0 0 0 .3-.3V8.537q-.002-.465-.066-.896c-.035-.24-.33-.32-.496-.145a52 52 0 0 1-1.919 1.918.75.75 0 0 1-.44.199l-2.848.278a.3.3 0 0 0-.26.382l.356 1.229a.75.75 0 0 1-.291.822c-2.172 1.52-3.966 2.158-6.363 2.245a.3.3 0 0 0-.288.252 13 13 0 0 0-.167 1.773.75.75 0 0 1-1.5 0c0-.346.088-7.781 6.28-13.221.14-.124.056-.362-.131-.362H7.783c-3.16 0-5.282 2.22-5.282 5.526v7.946c0 3.304 2.122 5.525 5.282 5.525h8.433c2.757 0 4.706-1.7 5.162-4.328a.29.29 0 0 0-.29-.335z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFeatherBold;
