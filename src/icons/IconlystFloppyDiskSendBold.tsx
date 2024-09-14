import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskSendBold = ({
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
      d="M14.519 17.632h-4.222c-.597 0-1.083.486-1.083 1.084V21.3c0 .11.09.2.2.2h5.988a.2.2 0 0 0 .2-.2v-2.584c0-.598-.485-1.084-1.083-1.084"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.093 8.06-4.47-4.66c-.55-.57-1.32-.9-2.11-.9h-5.1a.2.2 0 0 0-.2.2v2.02c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75V2.756c0-.117-.1-.209-.215-.196-2.652.294-4.437 2.232-4.585 5.083-.009.162.174.258.31.171.881-.555 1.853-.852 2.74.046.39.38.58.88.59 1.38h3.25c1.11 0 2 .89 2 2a2 2 0 0 1-2 2h-3.25c-.01.5-.2 1-.59 1.38-.39.39-.9.59-1.41.59-.516 0-.926-.207-1.294-.505-.138-.112-.356-.02-.356.158v1.107c0 3.061 1.825 5.163 4.595 5.47a.195.195 0 0 0 .215-.196V18.72c0-1.43 1.16-2.59 2.58-2.59h4.23c1.42 0 2.58 1.16 2.58 2.59v2.524c0 .117.1.209.215.196 2.77-.308 4.585-2.418 4.585-5.47v-5.89c0-.76-.29-1.48-.81-2.02"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.814 13.957a.751.751 0 0 0 .531-1.28l-.689-.689h5.41a.75.75 0 0 0 0-1.5H4.656l.687-.688a.749.749 0 1 0-1.06-1.06l-1.968 1.967a.751.751 0 0 0-.162.818c.031.075.08.14.133.2.012.013.016.03.028.043l1.968 1.97c.147.146.34.22.531.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFloppyDiskSendBold;
