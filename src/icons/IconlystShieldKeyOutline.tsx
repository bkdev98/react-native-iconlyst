import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldKeyOutline = ({
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
      fillRule="evenodd"
      d="M13.678 8.5a1.052 1.052 0 1 1-.002.002zm2.548-1.06a2.55 2.55 0 0 0-3.609 0l-.004.003a2.553 2.553 0 1 0 3.613-.004"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.675 9.995a.75.75 0 0 0-1.06 0L8.266 14.34a.75.75 0 0 0 0 1.061l1.275 1.274a.75.75 0 1 0 1.06-1.06l-.744-.744 3.817-3.817a.75.75 0 0 0 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.212 12.397a.75.75 0 0 0 0 1.06l1.274 1.275a.75.75 0 1 0 1.06-1.061l-1.273-1.274a.75.75 0 0 0-1.061 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.25 22.037a.7.7 0 0 1-.217-.032c-.321-.1-7.856-2.453-7.856-9.048 0-1.835-.025-3.161-.042-4.133-.044-2.434-.054-2.941.583-3.577.755-.754 6.448-2.71 7.532-2.71 1.145 0 6.765 1.937 7.534 2.712.635.64.625 1.146.581 3.582-.017.972-.041 2.3-.041 4.126 0 6.594-7.536 8.95-7.856 9.048a.7.7 0 0 1-.218.032m0-18A30 30 0 0 0 5.765 6.32c-.16.16-.166.492-.13 2.476.017.979.042 2.314.042 4.16 0 4.913 5.41 7.122 6.573 7.539 1.163-.417 6.574-2.626 6.574-7.538 0-1.843.025-3.175.042-4.152.035-1.991.029-2.323-.146-2.5-2.063-1-4.234-1.761-6.47-2.268"
    />
  </Svg>
);
export default IconlystShieldKeyOutline;
