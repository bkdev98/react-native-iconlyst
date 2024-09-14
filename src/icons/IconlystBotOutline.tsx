import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBotOutline = ({
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
      d="M6.44 7.961c.722-.774 1.744-1.2 2.933-1.2h5.755c1.191 0 2.214.426 2.935 1.2.716.77 1.078 1.82 1.078 2.98v3.968c0 1.16-.362 2.211-1.078 2.98-.721.775-1.744 1.2-2.936 1.2H9.373c-1.191 0-2.214-.425-2.935-1.2-.716-.768-1.079-1.82-1.079-2.98v-3.968c0-1.16.365-2.212 1.082-2.98m1.098 1.023c-.415.444-.679 1.108-.679 1.957v3.968c0 .85.263 1.514.677 1.958.407.438 1.016.722 1.837.722h5.754c.821 0 1.43-.284 1.838-.722.413-.444.676-1.107.676-1.958v-3.968c0-.85-.263-1.513-.676-1.957-.407-.438-1.016-.722-1.837-.722H9.373c-.817 0-1.427.284-1.835.722"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.21 14.223a.75.75 0 0 1 .987-.387c.71.31 1.395.31 2.105 0a.75.75 0 1 1 .6 1.375c-1.093.478-2.212.478-3.306 0a.75.75 0 0 1-.387-.988M14.457 10.25a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V11a.75.75 0 0 1 .75-.75M10.043 10.25a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V11a.75.75 0 0 1 .75-.75M3.288 12.835a2.585 2.585 0 0 1 2.586-2.585h.236a.75.75 0 0 1 0 1.5h-.236a1.085 1.085 0 1 0 0 2.171h.236a.75.75 0 0 1 0 1.5h-.236a2.586 2.586 0 0 1-2.586-2.586M17.64 11a.75.75 0 0 1 .75-.75h.237a2.585 2.585 0 1 1 0 5.171h-.236a.75.75 0 0 1 0-1.5h.236a1.085 1.085 0 0 0 0-2.171h-.236a.75.75 0 0 1-.75-.75M10.266 4.235a1.985 1.985 0 1 1 3.969 0 1.985 1.985 0 0 1-3.97 0m1.984-.485a.485.485 0 1 0 0 .97.485.485 0 0 0 0-.97"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 4.719a.75.75 0 0 1 .75.75V7.51a.75.75 0 0 1-1.5 0V5.469a.75.75 0 0 1 .75-.75M8.158 21a.75.75 0 0 1 .75-.75h6.686a.75.75 0 0 1 0 1.5H8.908a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBotOutline;
