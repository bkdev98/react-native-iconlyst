import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddStarBulk = ({
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
      d="M12.5 3.166c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75a10 10 0 0 0 1.703-.151.75.75 0 0 0-.26-1.477c-5.131.904-9.693-3.1-9.693-8.122 0-4.549 3.701-8.25 8.25-8.25s8.25 3.701 8.25 8.25c0 .743-.1 1.483-.298 2.201a.75.75 0 0 0 1.446.399 9.8 9.8 0 0 0 .352-2.6c0-5.376-4.374-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.479 12.82a1.03 1.03 0 0 0-.566-1.759l-1.787-.27-.788-1.57-.002-.004a1 1 0 0 0-.44-.443 1.01 1.01 0 0 0-.78-.073 1.05 1.05 0 0 0-.62.52l-.813 1.59-1.778.252a1.1 1.1 0 0 0-.586.307 1.03 1.03 0 0 0 .03 1.448l1.283 1.242-.303 1.736c-.037.221.002.453.106.643a1.023 1.023 0 0 0 1.389.43l1.61-.82 1.584.826c.202.1.425.131.622.096a1.021 1.021 0 0 0 .863-1.181l-.296-1.754zM20.279 18.566h-1.074v-1.08a.75.75 0 0 0-1.5 0v1.08H16.63a.75.75 0 0 0 0 1.5h1.074v1.07a.75.75 0 0 0 1.5 0v-1.07h1.074a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAddStarBulk;
