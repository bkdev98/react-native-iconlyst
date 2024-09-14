import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHuobiTokenBulk = ({
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
      d="M11.214 19.621a6.3 6.3 0 0 1-.747-2.37c-.14-1.755 1.083-3.34 2.268-4.874 1-1.294 1.942-2.516 2.14-3.865.496-3.395-1.627-5.48-2.41-5.943a.5.5 0 0 0-.736.298c-.369 1.332-1.755 4.72-4.357 8-1.748 2.18-2.044 4.967-.772 7.274.757 1.374 2.188 2.946 3.928 3.241q.256.043.454.041c.286 0 .471-.052.517-.067a.495.495 0 0 0 .283-.722s-.433-.766-.568-1.013"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.772 10.07a.5.5 0 0 0-.484-.14.52.52 0 0 0-.367.355c-.01.037-.293.949-2.725 4.17-.994 1.295-2.14 3.904 1.344 6.829l.102.087a.499.499 0 0 0 .654.014q.046-.037.152-.114c2.27-1.661 3.518-3.505 3.708-5.48.182-1.891-.619-3.815-2.384-5.721"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHuobiTokenBulk;
