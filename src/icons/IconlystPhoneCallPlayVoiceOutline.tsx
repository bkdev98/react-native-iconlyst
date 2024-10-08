import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallPlayVoiceOutline = ({
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
      d="M17.134 21.652c-2.35 0-5.4-1.865-9.085-5.544-3.698-3.694-5.562-6.76-5.548-9.11a3.54 3.54 0 0 1 1.138-2.67 1 1 0 0 1 .088-.09c1.355-1.355 2.249-1.94 3.186-1.891 1.067.013 1.818.8 2.77 1.805q.346.368.766.792a2.87 2.87 0 0 1 .558 3.565c-.4 1.038-.757 1.935.976 3.668 1.732 1.729 2.627 1.379 3.666.973a2.87 2.87 0 0 1 3.565.555q.417.413.782.758c1.006.956 1.8 1.71 1.813 2.78.01.91-.536 1.832-1.888 3.184l-.091.089a3.54 3.54 0 0 1-2.67 1.139zM4.792 5.29l-.1.108a2.05 2.05 0 0 0-.686 1.6c-.008 1.332.872 3.809 5.108 8.044 4.215 4.215 6.689 5.1 8.025 5.1h.017a2.05 2.05 0 0 0 1.606-.687q.078-.082.164-.156c.92-.926 1.393-1.614 1.389-2.05-.004-.434-.57-.972-1.347-1.712q-.378-.359-.81-.784c-.71-.71-1.1-.555-1.956-.22-1.2.47-2.848 1.116-5.274-1.31C8.5 10.8 9.145 9.154 9.615 7.95c.335-.857.488-1.248-.221-1.958a37 37 0 0 1-.793-.82C7.864 4.4 7.333 3.842 6.9 3.836h-.007c-.436 0-1.122.475-2.1 1.452zM18.6 9.54a.75.75 0 0 1-.75-.75V3.138a.75.75 0 1 1 1.5 0v5.655a.75.75 0 0 1-.75.75m2.65-1.8a.75.75 0 0 1-.75-.75V5.044a.75.75 0 1 1 1.5 0v1.95a.75.75 0 0 1-.75.749m-5.3 0a.75.75 0 0 1-.75-.75V5.044a.75.75 0 1 1 1.5 0v1.95a.75.75 0 0 1-.75.749"
    />
  </Svg>
);
export default IconlystPhoneCallPlayVoiceOutline;
