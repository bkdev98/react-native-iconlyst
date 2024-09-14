import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirdropOutline = ({
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
      d="M9.848 16.54c0-.42.336-.75.75-.75h2.303c.414 0 .75.33.75.75 0 .41-.336.75-.75.75h-2.303a.753.753 0 0 1-.75-.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.117 12.854a2.97 2.97 0 0 1 1.542.865c.575.62.861 1.45.863 2.36l.01 3.19c.002.9-.28 1.74-.852 2.36-.577.62-1.394.96-2.332.96l-5.172.01c-.938 0-1.756-.33-2.336-.95-.575-.62-.86-1.45-.864-2.36l-.008-3.18c-.003-.91.28-1.75.853-2.36.413-.45.947-.752 1.561-.888l-3.258-2.832c-.745-.52-1.18-1.42-1.039-2.35a7.756 7.756 0 0 1 15.333 0c.14.912-.276 1.795-.995 2.319l-.044.031zm-1.884 1.417h-.071l-2.763.006a.8.8 0 0 1-.193 0l-1.052.002c-.564 0-.968.2-1.234.49-.27.29-.454.74-.452 1.33l.008 3.19c.002.6.187 1.04.459 1.33.266.29.67.48 1.237.48l5.173-.01c.567 0 .97-.2 1.235-.48.147-.158.269-.364.349-.616a2.4 2.4 0 0 0 .102-.724l-.009-3.19c-.002-.59-.187-1.04-.458-1.33-.266-.28-.67-.48-1.237-.48zm4.707-6.162a.8.8 0 0 0-.005-.21 6.257 6.257 0 0 0-12.367 0 .8.8 0 0 0-.005.21zm-6.939 1.5H6.927l3.641 3.167h.433zm1.5 3.164.421-.001 3.653-3.163H12.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirdropOutline;
