import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdGemBulk = ({
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
      d="m11.952 14.91 1.23-2.2c.44-.79 1.28-1.28 2.18-1.28h4.92c.33 0 .648.066.942.188.225.093.508-.057.508-.3V9.87a.3.3 0 0 0-.3-.3h-18.4a.3.3 0 0 0-.3.3v4.4c0 2.79 1.79 4.67 4.46 4.67h5.435a.3.3 0 0 0 .222-.5l-.577-.64c-.71-.79-.84-1.96-.32-2.89"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.732 7.69c0-2.793-1.794-4.67-4.464-4.67H7.197c-2.67 0-4.463 1.877-4.463 4.67v.08a.3.3 0 0 0 .3.3h18.398a.3.3 0 0 0 .3-.3zM17.826 19.11l-2.776-3.082.754-1.347h4.043l.754 1.347zm4.346-3.346-1.23-2.199a.75.75 0 0 0-.655-.384h-4.923a.75.75 0 0 0-.654.384l-1.23 2.2a.75.75 0 0 0 .096.867l3.693 4.101a.75.75 0 0 0 1.115 0l3.692-4.1a.75.75 0 0 0 .096-.869"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdGemBulk;
