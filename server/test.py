import torch

print(f"CUDA available: {torch.cuda.is_available()}")
print(f"CUDA version: {torch.version.cuda}")
print(f"Device: {torch.cuda.get_device_name(0)}" if torch.cuda.is_available() else "No GPU detected.")

# This will check if PyTorch can allocate a tensor on the GPU
try:
    torch.zeros(1).cuda()
    print("CUDA is supported and working with PyTorch.")
except Exception as e:
    print(f"Error: {e}")
