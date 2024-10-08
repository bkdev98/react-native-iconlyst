import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLikeWorshipOutline = ({
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
      d="M13.012 2.497c.466-.08.944-.045 1.393.098h.003c1.808.583 2.332 2.517 1.848 4.025l-.002.004c-.4 1.22-1.395 2.15-2.192 2.741a10.5 10.5 0 0 1-1.526.938l-.028.014-.009.004-.003.002c-.001 0-.002 0-.318-.68l-.318.68h-.002l-.002-.002-.009-.004-.029-.014-.1-.05a10.66 10.66 0 0 1-1.44-.896c-.798-.592-1.802-1.524-2.182-2.74-.484-1.512.05-3.435 1.85-4.02l.009-.004c.45-.14.925-.171 1.388-.093.312.052.598.19.833.334.236-.145.523-.284.836-.337m-.834 7.146-.318.68c.2.094.434.094.635 0zm0-.845.064-.036a9 9 0 0 0 .926-.6c.722-.537 1.407-1.233 1.66-2.003.31-.97-.09-1.88-.878-2.135a1.46 1.46 0 0 0-.687-.048h-.002c-.136.023-.32.136-.634.371a.75.75 0 0 1-.896.002c-.316-.234-.5-.347-.637-.37a1.5 1.5 0 0 0-.688.045c-.793.26-1.19 1.172-.88 2.138l.001.006c.234.748.913 1.442 1.644 1.984a9 9 0 0 0 1.007.646"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.014 21.448a.75.75 0 0 1-.39-.11 8.56 8.56 0 0 1-3.643-4.664 17.3 17.3 0 0 1-.464-5.81q.018-.548.03-1.071a2.132 2.132 0 0 1 4.264.018 37 37 0 0 0 .18 4.28c.126.607.451 1.155.925 1.555a.75.75 0 0 1-.877 1.217 4.17 4.17 0 0 1-1.482-2.334c-.05-.162-.2-.654-.246-4.7a.632.632 0 0 0-1.264 0c-.007.354-.02.719-.03 1.09a15.9 15.9 0 0 0 .39 5.294 7.06 7.06 0 0 0 3 3.85.75.75 0 0 1-.39 1.39zM17.436 21.448a.75.75 0 0 1-.39-1.39 7.06 7.06 0 0 0 3-3.85c.425-1.729.558-3.517.391-5.289q-.02-.56-.03-1.1a.633.633 0 0 0-1.267 0 32 32 0 0 1-.244 4.7 4.22 4.22 0 0 1-1.483 2.333.75.75 0 1 1-.877-1.217c.475-.4.801-.95.926-1.558.141-1.42.2-2.848.178-4.276a2.133 2.133 0 1 1 4.266-.02c.007.351.02.711.031 1.077a17.3 17.3 0 0 1-.466 5.8 8.56 8.56 0 0 1-3.643 4.664.75.75 0 0 1-.392.126"
    />
    <Path
      fill={props.color}
      d="M10.632 21.545h-.006a.75.75 0 0 1-.744-.756 44 44 0 0 0-.19-4.917 3.46 3.46 0 0 0-1.44-2.2 2.3 2.3 0 0 0-1.921-.23.752.752 0 0 1-.41-1.444 3.8 3.8 0 0 1 3.123.4 5 5 0 0 1 2.123 3.208 45 45 0 0 1 .215 5.2.75.75 0 0 1-.75.739M13.819 21.544a.75.75 0 0 1-.75-.743 45 45 0 0 1 .214-5.2 5 5 0 0 1 2.12-3.206 3.8 3.8 0 0 1 3.127-.4.751.751 0 0 1-.41 1.444 2.3 2.3 0 0 0-1.922.231 3.46 3.46 0 0 0-1.44 2.2 44 44 0 0 0-.19 4.918.75.75 0 0 1-.742.757z"
    />
  </Svg>
);
export default IconlystLikeWorshipOutline;
