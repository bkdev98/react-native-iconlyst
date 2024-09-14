import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKettleOutline = ({
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
      d="m6.374 18.187-.005-.007-3.518-5.55a.746.746 0 0 1 .316-1.08l1.611-.75a.76.76 0 0 1 .85.15l1.878 1.903.016-.025a1 1 0 0 1 .07-.13A7.34 7.34 0 0 1 6.74 9.26C6.74 5.25 9.994 2 14.003 2a7.263 7.263 0 0 1 7.263 7.26c0 1.37-.379 2.684-1.065 3.784.769 1.384 1.059 3 .938 4.646l-.748-.055-.748-.055c.1-1.356-.126-2.63-.7-3.71H8.64a6 6 0 0 0-.862 3.06c0 .544.08 1.067.17 1.645q.05.328.1.685c.056.43.419.74.846.74l9.721-.07c.268 0 .433-.09.555-.22.137-.16.252-.4.305-.73.075-.46.135-.93.169-1.39v-.01l.743.06.753.05a17 17 0 0 1-.184 1.53c-.085.53-.291 1.07-.679 1.5-.403.44-.967.71-1.651.71l-9.722.07a2.343 2.343 0 0 1-2.343-2.04q-.037-.268-.083-.564a34 34 0 0 1-.103-.709m.054-2.72a7.6 7.6 0 0 1 .356-1.203l-1.854-1.88-.355.166zm3.447-3.097h7.903a6 6 0 0 0-.786-.6c-2.272-1.45-5.163-1.132-7.117.6m-1.212-.923a7.55 7.55 0 0 1 3.271-1.844A1.97 1.97 0 0 1 13.76 6.88a1.97 1.97 0 0 1 1.842 2.683c.759.187 1.501.5 2.199.947a7.3 7.3 0 0 1 1.427 1.19 5.7 5.7 0 0 0 .539-2.44 5.763 5.763 0 0 0-11.526 0c0 .776.151 1.51.423 2.187m5.57-2.597c0-.26-.212-.47-.474-.47a.474.474 0 1 0 .474.47"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKettleOutline;
