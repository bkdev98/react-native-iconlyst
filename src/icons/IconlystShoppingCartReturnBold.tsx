import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartReturnBold = ({
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
      d="M7.235 19.041a1.232 1.232 0 1 0 .002 2.464 1.232 1.232 0 0 0-.002-2.464M18.259 19.041c-.68 0-1.232.552-1.232 1.231a1.232 1.232 0 1 0 1.232-1.231M16.226 13.972a.75.75 0 0 1-1.5 0v-1.197a1.51 1.51 0 0 0-1.508-1.508h-1.551l.464.464a.749.749 0 1 1-1.061 1.06l-1.743-1.744a.75.75 0 0 1 0-1.06l1.743-1.744a.75.75 0 1 1 1.06 1.061l-.463.463h1.55a3.01 3.01 0 0 1 3.009 3.008zm5.116-6.903a2.04 2.04 0 0 0-1.354-.805c-.071-.01-.114-.016-13.99-.02l-.226-2.708a.75.75 0 0 0-.62-.676l-2.024-.35a.74.74 0 0 0-.866.61.75.75 0 0 0 .61.867l1.454.252.888 10.584a2.513 2.513 0 0 0 2.49 2.296H18.33c1.236 0 2.3-.922 2.476-2.147l.922-6.379a2.04 2.04 0 0 0-.386-1.524"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingCartReturnBold;
