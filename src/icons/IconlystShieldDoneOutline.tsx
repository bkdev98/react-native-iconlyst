import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldDoneOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.484 2c1.133 0 7.078 2.041 7.865 2.828.656.656.646 1.186.6 3.726-.018 1.018-.043 2.405-.043 4.325 0 6.882-7.87 9.344-8.205 9.445a.73.73 0 0 1-.434 0c-.335-.101-8.205-2.563-8.205-9.445 0-1.917-.025-3.304-.043-4.322-.009-.454-.016-.844-.018-1.182v-.381c.008-1.253.126-1.674.619-2.166C5.405 4.041 11.35 2 12.484 2m0 1.5c-.848 0-6.198 1.884-6.815 2.399-.182.183-.19.501-.15 2.63.018 1.026.043 2.42.043 4.35 0 5.201 5.722 7.51 6.92 7.935 1.199-.427 6.924-2.749 6.924-7.935 0-1.932.025-3.327.044-4.353.038-2.127.03-2.445-.162-2.637-.605-.505-5.956-2.389-6.804-2.389m3.721 5.84a.75.75 0 0 1 0 1.06l-3.898 3.9a.75.75 0 0 1-.412.21l-.118.01a.75.75 0 0 1-.53-.22l-1.893-1.895a.751.751 0 0 1 1.062-1.06l1.361 1.362 3.368-3.367a.75.75 0 0 1 1.06 0"
    />
  </Svg>
);
export default IconlystShieldDoneOutline;
